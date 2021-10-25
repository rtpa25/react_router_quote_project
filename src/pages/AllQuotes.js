import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "John", text: "Fuck you" },
  { id: "q2", author: "Joh", text: "Fuck you" },
  { id: "q3", author: "Jo", text: "Fuck you" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
