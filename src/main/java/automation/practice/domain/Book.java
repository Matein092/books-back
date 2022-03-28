package automation.practice.domain;


import lombok.Setter;

public class Book {
  public Book() { }

  public Book(String name, String author) {
    this.name = name;
    this.author = author;
  }

 
  @Setter
  private String name;


  @Setter
  private String author;

public String getName() {
    return name;
}
public String getAuthor(){
  return author;
}

}
