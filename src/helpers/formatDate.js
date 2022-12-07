import moment from 'moment';

const formatDate = (d) => {
  return moment(d).format('MMMM D, YYYY');
};

export default formatDate;
