package com.tgr.service;

import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public interface ResourceService {

    public Object getStoriesObject() throws IOException;

    public Object getShowsObject() throws IOException;
}
