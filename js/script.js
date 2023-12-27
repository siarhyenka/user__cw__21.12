class UsersObj {
    constructor() {
        this.getUsers();
        
       
    }

    async getUsers() {
       
        try {
            const response = await fetch('https://dummyjson.com/users');
            if(response.status >= 400 && response.status <= 420 || response.status >= 500 && response.status <= 520) {
                throw new Error('error');
            }
            const data = await response.json();
          
            this.serverData(data.users);
            
        } catch (error) {
            console.log(error)
        }

        
    }


    creatElement() {
        const main = document.createElement('div');
        main.classList.add('main__content');
        main.innerHTML = `
                            <div class="table__content">
                                <table>
                                </table>
                            </div>
                        `
        document.body.appendChild(main);
    }

    serverData(data) {
        const usersData = data.map(({firstName, lastName, email, image, age}) => ({
                                                                                        firstName,
                                                                                        lastName,
                                                                                        email,
                                                                                        image,
                                                                                        age
                                                                                    }))

        this.creatElement()
        this.showUser(usersData)
    }
        
   

   

    showUser(usersData) {

        const table = document.querySelector('table');
        const tableContent = document.querySelector('.table__content')
        let userData = '';
        usersData.forEach((data) => {
            const {firstName, lastName, email, image, age} = data;
            userData += `
                        <tr>
                            <td>${firstName}</td>
                            <td>${lastName}</td>
                            <td>${email}</td>
                            <td><img src="${image}" class="img"></img></td>
                            <td>${age}</td>
                        </tr>
                        `
        });
        table.innerHTML = `${userData}`;
        tableContent.appendChild(table)
        
    }
    
}

const user = new UsersObj()