const getUsers = async () => {
    const response = await fetch('https://random-data-api.com/api/vehicle/random_vehicle?size=10');
    const data = response.json();
    return data;
  }
  
  const randomUsers = async () => { 
    const users = await getUsers();
    const html = users.map((user) => ( 
        `<h1>${user.fuel_type}</h1>
        <h1>${user.drive_type}</h1>
        <p>${user.car_options}</p>
        <img src="${user.car_type}">`
      ));
    const div = document.querySelector(".container");
    console.log(html);
    div.innerHTML = html.join('');
    console.log(html.join(''));
  }
  randomUsers();            