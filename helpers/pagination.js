export function PaginationData(inputData) {
  const defaultData = {
    currentPage: 1,
    pagesCount: 1,
    showPositions: 7,
    paddingFirst: 0,
    paddingLast: 0,
    paddingActive: 1,
  };
  const data = { ...defaultData, ...inputData };
  if (data.showPositions < 7) data.showPositions = 7;
  let output = [];
  const elementDefault = {
    isCurrent: false,
    isPlaceholder: false,
    index: 1,
    pageNumber: 1,
    displayValue: 1,
  };

  let startPage, endPage;

  // https://stackoverflow.com/questions/11272108/logic-behind-pagination-like-google
  if (data.pagesCount <= 2 * data.paddingActive + 5) {
    // in this case, too few pages, so display them all
    startPage = 1;
    endPage = data.pagesCount;
  } else if (data.currentPage <= data.paddingActive + 3) {
    // in this case, curr_page is too close to the beginning
    startPage = 1;
    endPage = 2 * data.paddingActive + 3;
  } else if (data.currentPage >= data.pagesCount - (data.paddingActive + 2)) {
    //  in this case, curr_page is too close to the end
    startPage = data.pagesCount - 2 * data.paddingActive - 2;
    endPage = data.pagesCount;
  } else {
    // regular case
    startPage = data.currentPage - data.paddingActive;
    endPage = data.currentPage + data.paddingActive;
  }

  let page = 1;
  if (startPage > page) {
    const element = { ...elementDefault };
    if (data.currentPage === page) element.isCurrent = true;
    element.index = page;
    element.pageNumber = page;
    element.displayValue = page;
    output.push(element);
  }

  page = 2;
  if (startPage > page) {
    const element = { ...elementDefault };
    element.index = page;
    element.pageNumber = null;
    element.displayValue = "...";
    output.push(element);
  }

  for (let index = startPage; index <= endPage; index++) {
    const element = { ...elementDefault };
    if (index === data.currentPage) element.isCurrent = true;
    element.index = index;
    element.pageNumber = index;
    element.displayValue = index;
    output.push(element);
  }

  page = data.pagesCount - 1;
  if (endPage < page) {
    const element = { ...elementDefault };
    element.index = page;
    element.pageNumber = null;
    element.displayValue = "...";
    output.push(element);
  }

  page = data.pagesCount;
  if (endPage < page) {
    const element = { ...elementDefault };
    if (data.currentPage === page) element.isCurrent = true;
    element.index = page;
    element.pageNumber = page;
    element.displayValue = page;
    output.push(element);
  }
  return output;
}
