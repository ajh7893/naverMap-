package com.water.gg;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MapController {

    @GetMapping("/map/map.do")
    public String map(Model model){
        model.addAttribute("message", "Hello, Spring Boot!"); // 템플릿으로 전달할 데이터
        return "map";
    }
}
