package com.spavue.core.servlets;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.api.resource.ValueMap;
import com.day.cq.commons.jcr.JcrConstants;

import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;

import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.commons.json.JSONException;
import org.apache.sling.commons.json.jcr.JsonItemWriter;
import org.apache.sling.commons.json.JSONObject;
import org.apache.sling.commons.json.JSONArray;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import java.io.IOException;
import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.servlet.ServletException;
import com.day.cq.dam.api.Asset;
import com.day.cq.dam.commons.util.DamUtil;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashSet;
import java.util.Set;
import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
 
@Component(service=Servlet.class,
           property={
                   Constants.SERVICE_DESCRIPTION + "=Simple Demo Servlet",
                   "sling.servlet.methods=" + HttpConstants.METHOD_GET,
                   "sling.servlet.paths="+ "/bin/assetsStoreList"
                })
public class AssetVueListServlet extends SlingSafeMethodsServlet {
 
    private static final long serialVersionUid = 1L;
    private static final Logger logger = LoggerFactory.getLogger(AssetVueListServlet.class);

    @Override
    protected void doGet(final SlingHttpServletRequest request,
            final SlingHttpServletResponse response) throws ServletException, IOException {
        
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json");

        try {
        	String assetsPath = "/content/dam/spavue";
        	//request.getRequestParameter("ASSETS_PATH").getString();
			final PrintWriter out = response.getWriter();
        	final ResourceResolver resolver = request.getResourceResolver();
	        JSONArray assetDetailsList =   createJsonAssetsList(assetsPath,resolver);  

            /* Write the JSON to the PrintWriter */
            out.print(assetDetailsList.toString());
			out.flush();
            response.setStatus(SlingHttpServletResponse.SC_OK);
        } catch (Exception e) {
            logger.error("Could not get JSON", e);
            response.setStatus(SlingHttpServletResponse.SC_INTERNAL_SERVER_ERROR);
		}
    }

    private JSONArray createJsonAssetsList(String assetsPath,ResourceResolver resResolver){
		
		Resource resource = resResolver.getResource(assetsPath);
		JSONArray jsonResponse = new JSONArray();
		logger.info("VUEJS seet crete list");
        if(resource != null){
			logger.info("VUEJS staart resource iteration " + resource.getPath());
        	Iterator<Resource> assetsChilds = resource.listChildren();

			while(assetsChilds.hasNext()){
				Resource childAsset = assetsChilds.next();
				JSONObject assetData = createJsonAsset(childAsset.getPath(),resResolver);
				jsonResponse.put(assetData);		
			}
		}
		            
		return jsonResponse;
	}

	private JSONObject createJsonAsset(String fileName,ResourceResolver resResolver){
		Resource resource = resResolver.getResource(fileName);
		JSONObject assetData = new JSONObject();
		if (resource != null) {
			//Asset asset = resource.adaptTo(Asset.class);
			// fill asset data
			//Resource metadata = resource.getChild(JcrConstants.JCR_CONTENT + "/metadata");
			//ValueMap properties = metadata.adaptTo(ValueMap.class);
			
			try {
				assetData.put("assetPath", resource.getPath());
				assetData.put("assetName", resource.getName());
			} catch (JSONException e) {
				logger.error(e.getMessage());
			}
		}
		return assetData;
	}
}