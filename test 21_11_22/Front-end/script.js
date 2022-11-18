/* 4 */
'use strict';

console.log(document.querySelectorAll(`[data-id]`));

/* 5 */

const sort = document.querySelector(`.five__sort`);
const blocksForSort = document.querySelectorAll(`.five__block`);


const blocks = Array.from(blocksForSort);

const sortBlocks = () => {
  for (let i = 0; i < blocks.length - 1; i++) {
    let minValue = blocks[i].offsetHeight;  
    for (let j = i + 1; j < blocks.length; j++) {
      if (blocks[j].offsetHeight < minValue) {
        minValue = blocks[j];
        let swap = blocks[i];
        blocks[i] = minValue;
        blocks[j] = swap;
      }
    }
  }
  
  blocks.forEach((elem, index) => {
    elem.style.order = index + 1;
  });
};

sort.addEventListener(`click`, sortBlocks);

