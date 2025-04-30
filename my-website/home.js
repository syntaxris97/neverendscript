body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: url('image/mybackground.jpg') no-repeat center center fixed;
  background-size: cover;
  color: white;
}

header {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}

nav {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.5rem;
  text-align: center;
}

nav a {
  color: white;
  margin: 0 1rem;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  gap: 1.5rem;
}

.card {
  width: 300px;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.03);
}

.card img {
  width: 100%;
  border-radius: 12px;
}

.card h3 {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #fff;
}

.pagination {
  text-align: center;
  margin: 2rem 0;
}

.pagination button {
  margin: 0 0.3rem;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
}

.pagination button:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
