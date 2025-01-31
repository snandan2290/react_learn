// const FunctionComp = (props) => {
const FunctionComp = ({ empName, empId }) => {
  //   const { empName, empId } = props;
  return (
    <div>
      <h1>Employee Name: {empName}</h1>
      <h2>Employee ID: {empId}</h2>
    </div>
  );
};

export default FunctionComp;
