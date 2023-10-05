// TODO: Fix the errors in the functions below!

const functions = {
  addClickListener(element, callback) {
    element.addEventListener('click', callback);
  },

  removeClickListener(element, callback) {
    element.removeEventListener('click', callback);
  },

  addKeyDownListener(element, callback) {
    element.addEventListener('keydown', (event) => {
      callback();
    });
  },

  removeKeyDownListener(element, callback) {
    // how to remove
  },

  addClickWithCaptureListener(element, callback) {
    let clickCount;

    const captureListener = () => {
      clickCount;
    };

    const bubbleListener = () => {
      console.log(`Click count: ${clickCount}`);
    };

    // addEventListener 'click', handler, true/false
    captureListener.addEventListener('click', handleClick, { passive: true });
  },

  addClickWithBubbleListener(element) {
    let count;

    const handleClick = (event) => {
      // https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation*
      event.stopPropagation();
    };

    element.addEventListener('click', handleClick);

    return () => {
      // remove event listener
      removeEventListener('click', handleClick);
      //
      return count;
    };
  },
};

module.exports = functions;
