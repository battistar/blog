// Set copyright date

const BUILD_YEAR = 2023;

const setCopyright = () => {
  const dateElement = document.getElementById('copyright-date');
  const currentYear = new Date().getFullYear();

  let date;
  if (BUILD_YEAR !== currentYear) {
    date = `${BUILD_YEAR} - ${currentYear}`;
  } else {
    date = `${currentYear}`;
  }

  dateElement.textContent = date;
};

setCopyright();
