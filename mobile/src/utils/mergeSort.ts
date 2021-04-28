import { UserTransaction } from '../utils/types';

export const mergeSort = (array: Array<UserTransaction>) => {
  const merge = (
    left: Array<UserTransaction>,
    right: Array<UserTransaction>
  ) => {
    var result = [];
    var indexLeft = 0;
    var indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft++]);
      } else {
        result.push(right[indexRight++]);
      }
    }

    while (indexLeft < left.length) {
      result.push(left[indexLeft++]);
    }

    while (indexRight < right.length) {
      result.push(right[indexRight++]);
    }

    return result;
  };

  const mergeSortRec = (
    list: Array<UserTransaction>
  ): Array<UserTransaction> => {
    var length = list.length;

    if (length === 1) {
      return list;
    }

    var mid = Math.floor(length / 2);
    var left = list.slice(0, mid);
    var right = list.slice(mid, length);

    return merge(mergeSortRec(left), mergeSortRec(right));
  };

  return mergeSortRec(array);
};
