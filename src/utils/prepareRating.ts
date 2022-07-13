const prepareRating = (value: {average: number}): string => {
    return value.average ? `${value.average} / 10` : '5 / 10';
};

export default prepareRating;