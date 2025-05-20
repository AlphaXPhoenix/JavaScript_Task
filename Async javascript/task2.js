const wait = function (seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  };

  const createImage = function (imgPath) {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img');
      img.src = imgPath;

      img.addEventListener('load', () => {
        document.querySelector('.images').append(img);
        resolve(img);
      });

      img.addEventListener('error', () => {
        reject(new Error('Image not found 😢'));
      });
    });
  };

  // PART 1: Load and pause
  const loadNPause = async function () {
    try {
      let img = await createImage('img/img-1.jpg');
      console.log('Image 1 loaded ✅');
      await wait(2);
      img.style.display = 'none';

      img = await createImage('img/img-2.jpg');
      console.log('Image 2 loaded ✅');
      await wait(2);
      img.style.display = 'none';
    } catch (err) {
      console.error(`❌ ${err.message}`);
    }
  };

  // Uncomment this to test PART 1
  // loadNPause();

  // PART 2: Load all images in parallel
  const loadAll = async function (imgArr) {
    try {
      const imgs = imgArr.map(async path => await createImage(path));
      const imgElements = await Promise.all(imgs);

      imgElements.forEach(img => img.classList.add('parallel'));
      console.log('All images loaded in parallel ✅');
    } catch (err) {
      console.error(`❌ ${err.message}`);
    }
  };

  // Uncomment this to test PART 2
  loadAll(['img-1.jpg', 'img-2.jpg', 'img-3.jpg']);
