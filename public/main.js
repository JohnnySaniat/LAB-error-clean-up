import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line
import htmlStructure from '../components/shared/htmlStructure';
import header from '../components/shared/header';
import startSortingBtn from '../components/shared/sortStudentButton';
import events from '../events/allEvents';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
