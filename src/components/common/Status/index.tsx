interface IStatus {
  isValid: boolean;
}
export const Status = ({ isValid }: IStatus) => {
  return (
    <>
      {isValid ? (
        <span className="check"></span>
      ) : (
        <span className="error">x</span>
      )}
    </>
  );
};
