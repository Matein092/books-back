package automation.practice.controllers.dto;

import lombok.Getter;
import lombok.Setter;

public class BookDto {
    public BookDto(String id, String name, String author) {
        this.id = id;
        this.name = name;
        this.author = author;
    }

    @Getter
    @Setter
    private String id;

    @Setter
    private String name;

    @Setter
    private String author;

    public String getName(){
        return name;
    }

    public String getAuthor() {
        return author;
    }
    
}
