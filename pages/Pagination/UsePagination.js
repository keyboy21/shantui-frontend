import { useState, useEffect } from 'react';
import Image from 'next/image';
import classes from './pagination.module.css';
function Pagination({ pages = 10, setCurrentPage }) {
  //Set number of pages
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  // Current active button number
  const [currentButton, setCurrentButton] = useState(1);

  // Array of buttons what we see on the page
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];

    let dotsInitial = '...';
    let dotsLeft = '... ';
    let dotsRight = ' ...';

    if (numberOfPages.length < 6) {
      tempNumberOfPages = numberOfPages;
    } else if (currentButton >= 1 && currentButton <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    } else if (currentButton === 4) {
      const sliced = numberOfPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
      // from 5 to 8 -> (10 - 2)
      const sliced1 = numberOfPages.slice(currentButton - 2, currentButton); // sliced1 (5-2, 5) -> [4,5]
      const sliced2 = numberOfPages.slice(currentButton, currentButton + 1); // sliced1 (5, 5+1) -> [6]
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length,
      ]; // [1, '...', 4, 5, 6, '...', 10]
    } else if (currentButton > numberOfPages.length - 3) {
      // > 7
      const sliced = numberOfPages.slice(numberOfPages.length - 4); // slice(10-4)
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (currentButton === dotsInitial) {
      // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
      // arrOfCurrButtons[3] = 4 + 1 = 5
      // or
      // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
      // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
      setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentButton === dotsRight) {
      setCurrentButton(arrOfCurrButtons[3] + 2);
    } else if (currentButton === dotsLeft) {
      setCurrentButton(arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfPages);
    setCurrentPage(currentButton);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentButton]);

  return (
    <div>
      <a
        href="#"
        className={`${
          currentButton === 1 ? `disabled ${classes.left}` : classes.left
        }`}
        onClick={() =>
          setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1))
        }
      >
        <Image src={'/Vectorleft.svg'} width={8} height={14} alt="left" />
      </a>

      {arrOfCurrButtons.map((item, index) => {
        return (
          <a
            href="#"
            key={index}
            className={`${
              currentButton === item ? classes.active : classes.pag_number
            }`}
            onClick={() => setCurrentButton(item)}
          >
            {item}
          </a>
        );
      })}

      <a
        href="#"
        className={`${
          currentButton === numberOfPages.length
            ? `disabled ${classes.right}`
            : classes.right
        }`}
        onClick={() =>
          setCurrentButton((prev) =>
            prev >= numberOfPages.length ? prev : prev + 1,
          )
        }
      >
        <Image src={'/Vectorright.svg'} width={8} height={14} alt="left" />
      </a>
    </div>
  );
}

export default Pagination;
