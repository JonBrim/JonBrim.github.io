const postHeader = document.querySelector('.sticky_trigger');
const navigation = document.querySelector('.navigation');

beholder = new IntersectionObserver( entries => {
  entries.forEach( entry => {
    if ( entry.intersectionRatio > 0 ) {
      navigation.classList.remove('is-sticky');
    } else {
      navigation.classList.add( 'is-sticky' );
    }
  });
});

if( postHeader ) {
  beholder.observe( postHeader );
}