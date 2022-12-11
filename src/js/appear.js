export default function() {
  const els = document.querySelectorAll('.appear-stack');
  console.log(els);

  let i = 0;
  let interval = setInterval(() => {
    if (i === els.length) {
      return clearInterval(interval);
    }

    console.log(els[i]);

    els[i].style.transform = 'translateY(0)';
    els[i].style.opacity = '1';
    i++;
  }, 300);
};
