function showContent(content) {
    var homeContent = "<h2>Home</h2><p>Welcome to the Home section.</p>";
    var contactContent = "<h2>Contact</h2><p>Contact information goes here.</p>";
    var informationContent = "<h2>Information</h2><p>Additional information goes here.</p>";
    var guideContent = "<h2>Guide</h2><p>Guidelines and instructions go here.</p>";

    var contentContainer = document.querySelector('.content');
    switch (content) {
      case 'home':
        contentContainer.innerHTML = homeContent;
        break;
      case 'contact':
        contentContainer.innerHTML = contactContent;
        break;
      case 'information':
        contentContainer.innerHTML = informationContent;
        break;
      case 'guide':
        contentContainer.innerHTML = guideContent;
        break;
      default:
        contentContainer.innerHTML = "<h2>Error</h2><p>Invalid content selection.</p>";
        break;
    }
}