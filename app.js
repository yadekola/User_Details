document.addEventListener('DOMContentLoaded', () => {
    const profilesContainer = document.getElementById('profiles');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const profileCard = document.createElement('div');
                profileCard.classList.add('profile-card');

                const avatar = document.createElement('img');
                avatar.src = `https://i.pravatar.cc/150?img=${user.id}`;
                avatar.alt = `${user.name}'s avatar`;

                const name = document.createElement('h2');
                name.textContent = user.name;

                const email = document.createElement('p');
                email.textContent = `Email: ${user.email}`;

                const phone = document.createElement('p');
                phone.textContent = `Phone: ${user.phone}`;

                const address = document.createElement('p');
                address.textContent = `Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

                const website = document.createElement('p');
                website.textContent = `Website: ${user.website}`;

                const company = document.createElement('p');
                company.textContent = `Company: ${user.company.name}`;

                profileCard.append(avatar, name, email, phone, address, website, company);
                profilesContainer.appendChild(profileCard);
            });
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            profilesContainer.textContent = 'Failed to load user profiles.';
        });
});
