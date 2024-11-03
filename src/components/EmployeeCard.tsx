interface EmployeeCardProps {
  employee: {
    name: {
      first: string;
      last: string;
    };
    email: string;
    picture: {
      medium: string;
    };
  };
}

function EmployeeCard({ employee }: EmployeeCardProps) {
  const { name, email, picture } = employee;

  return (
    <figure className='DisplayEmployee'>
      <img src={picture.medium} alt={`${name.first} ${name.last}`} />
      <figcaption>
        <strong>{`${name.first} ${name.last}`}</strong>
        <p>{email}</p>
      </figcaption>
    </figure>
  );
}

export default EmployeeCard;
