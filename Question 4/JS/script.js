function helloWorld(languageCode){
    console.log("This is " + languageCode + " language code")
    
    if (languageCode == "es"){
      console.log("Hola Mundo")
    }
    else if (languageCode == "ja"){
      console.log("こんにちは世界")
    }
    else if (languageCode =="de"){
      console.log("Hallo Welt")
    }
    else{
      console.log("Hello World!")
    }
  }
  
  helloWorld("es");
  helloWorld("ja");
  helloWorld("de");
  helloWorld("en");
  