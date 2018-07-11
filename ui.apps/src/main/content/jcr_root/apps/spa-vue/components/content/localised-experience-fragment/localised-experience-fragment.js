/*******************************************************************************
 * ADOBE CONFIDENTIAL
 * __________________
 *
 * Copyright 2017 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 ******************************************************************************/
// Disable eslint as this is coming from Adobe.
/* eslint-disable */
use(function () {
    "use strict";
    var constants = Packages.com.adobe.cq.xf.ExperienceFragmentsConstants;
    var fragmentPath;
    var properties;
    if (this.fragment) {
        fragmentPath = this.fragment;
    } else {
        properties = resource.adaptTo(Packages.org.apache.sling.api.resource.ValueMap);
        fragmentPath = properties.get("fragmentPath");
    }
    if (fragmentPath == null || fragmentPath.equals("")) {
        return {
            fragmentPath: fragmentPath
        };
    }
    // Localise path if exists, otherwise use the original one.
    var currentLang = currentPage.language.language;
    var localisedPath = '';
    var regex = new RegExp('^/content/');
    if (regex.test(fragmentPath) && fragmentPath.split('/').length > 5) {
        localisedPath = fragmentPath.replace('/' + fragmentPath.split('/')[4] + '/', '/' + currentLang + '/');
        if (resolver.getResource(localisedPath)) {
            fragmentPath = localisedPath;
        }
    }

    var fragment = resolver.getResource(fragmentPath);
    if (fragment == null) {
        return {
            fragmentPath: null
        };
    }
    var fragmentContent = fragment.getChild("jcr:content");
    if (fragmentContent == null) {
        return {
            fragmentPath: null
        };
    }

    var variation = null;
    var variationPath = fragmentPath;
    if (fragmentContent.isResourceType(constants.RT_EXPERIENCE_FRAGMENT_MASTER)) {
        var children = fragment.getChildren();
        for (var idx in children) {
            var res = children[idx];
            var content = res.getChild("jcr:content");
            if (content != null) {
                var props = content.adaptTo(Packages.org.apache.sling.api.resource.ValueMap);
                if (props.get(constants.PN_XF_MASTER_VARIATION) == true) {
                    variation = res;
                    variationPath = variation.getPath();
                    // Update with correct master variation path in repository
                    var modifiableProperties = resource.adaptTo(org.apache.sling.api.resource.ModifiableValueMap);
                    modifiableProperties.put("fragmentPath", variationPath);
                    resolver.commit();
                }
            }
        }
    }

    return {
        variationResource: variation,
        fragmentPath: variationPath + '/jcr:content'
    };
});
