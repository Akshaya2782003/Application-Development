const sidebarStyle = {
    backgroundColor: 'grey',
    padding: '20px',
    width: '200px',
    position: 'fixed',
    top: '50px',
    left: 0,
    bottom: 0,
  };

  const sidebarLinkStyle = {
    display: 'block',
    margin: '25px 0',
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  };

  const hoverStyle = {
    backgroundColor: 'blue',
    color: 'black',
  };

  const mainContentStyle = {
    marginLeft: '220px',
    padding: '20px',
  };

  const slideshowContainerStyle = {
    marginTop: '70px',
    marginLeft: '220px',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };

  const slideImages = [
    'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689050870/gppnraeyghm1gfn5gjvk.jpg',
    'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689051267/laaih9qtlpje4qzatgsi.jpg',
    'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689051504/jk6vuxdnnaqgusuiiycy.jpg',
    'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689051718/niuveaewbkqjsub2kn7u.png',
  ];

  const slideProperties = {
    duration: 5000, 
    transitionDuration: 500, // Transition duration between slides in milliseconds
    infinite: true, // Whether to loop the slideshow continuously
    indicators: true, // Whether to show slide indicators at the bottom
    arrows: true, // Whether to show previous/next arrows
    autoplay: true, // Whether to automatically transition to the next slide
    pauseOnHover: true, // Whether to pause the slideshow on hover
    canSwipe: true, // Whether to allow swiping on touch-enabled devices
  };

  const slideContainerStyle = {
    height: '10px', // Adjust the height as needed
    width: '400px', // Adjust the width as needed
    margin: '20px 0', // Center the slideshow horizontally
  };

  const slideImageStyle = {
    height: '100%', // Make the images fill the slide container vertically
    width: '100%', // Make the images fill the slide container horizontally
    objectFit: 'cover', // Scale and crop the images to fit the container
  };
