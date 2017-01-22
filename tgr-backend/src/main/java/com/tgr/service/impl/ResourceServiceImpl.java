package com.tgr.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tgr.service.ResourceService;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.PathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;

@Service
public class ResourceServiceImpl implements ResourceService {


    @Value("${json.resource.path}")
    String jsonResourcePath;

    private static final Logger logger = LoggerFactory.getLogger(ResourceServiceImpl.class);

    public Object getStoriesObject() throws IOException {
        return getJsonObject(new PathResource(jsonResourcePath + "stories.json"));
    }

    public Object getShowsObject() throws IOException {
        return getJsonObject(new PathResource(jsonResourcePath + "shows.json"));
    }

    private Object getJsonObject(Resource resource) throws IOException {
        String jsonStr = "";
        try  (InputStream is = resource.getInputStream()){
            jsonStr = IOUtils.toString(is);
        } catch (IOException e) {
            logger.error(e.getMessage(), e);
            throw e;
        }

        Object object = new Object();
        ObjectMapper mapper = new ObjectMapper();
        try {
            object = mapper.readValue(jsonStr, Object.class);
        } catch (IOException e) {
            logger.error(e.getMessage(), e);
            throw e;
        }
        return  object;
    }


}


