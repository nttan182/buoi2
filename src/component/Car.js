import {useState} from "react";

function Car() {
  const [car, setCar] = useState({
    name: "Porsche",
    color: "Black",
    year: 2010,
  });

  const [inpYear, setInpYear] = useState(car.year);

  return (
    <>
      Show information of Car: <br />
      <p>Tên: {car.name} </p>
      <p>Màu: {car.color}</p>
      <p>Năm: {car.year}</p>
      Update Year of Car:
      <input
        type="number"
        value={inpYear}
        onInput={(e) => setInpYear(e.target.value)}
      />
      <input
        type="button"
        value="Update Year"
        onClick={(e) =>
          setCar({
            ...car,
            year: inpYear,
          })
        }
      />
    </>
  );
}
export default Car;