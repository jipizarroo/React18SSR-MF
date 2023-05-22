import React from "react";
import styles from "./AvatarMenu.module.css";

const AvatarMenu = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fakeRequest = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            name: "Javier Pizarro Ortega",
            age: "31",
            lastEntry: "Ayer",
          });
        }, 5000);
      });
    };
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fakeRequest();
        setData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  else {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.content_container}>
            <h1>{data?.name}</h1>
            <h3>Edad: {data?.age}</h3>
            <p>Ultimo ingreso: {data?.lastEntry}</p>
          </div>
        </div>
      </div>
    );
  }

};

export default AvatarMenu;
