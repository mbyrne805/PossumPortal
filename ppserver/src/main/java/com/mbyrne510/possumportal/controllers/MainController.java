package com.mbyrne510.possumportal.controllers;

import com.mbyrne510.possumportal.services.map.MapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class MainController {
    private final MapService mapService;
//    private final ChatService chatService;
//    private final UserService userService;

    @Autowired
    public MainController(MapService mapService) {
        this.mapService = mapService;
//        this.chatService = chatService;
//        this.userService = userService;
    }
}
