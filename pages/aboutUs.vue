<template>
    <div class="about-page">
        <div class="about-container">
            <h1>About Us</h1>
            <div class="about-content">
                <section class="about-section">
                    <h2>Welcome to ToDo List</h2>
                    <p>
                        Our ToDo List application is a simple yet powerful tool designed to help you 
                        manage your daily tasks efficiently. Whether you're organizing work projects, 
                        personal errands, or long-term goals, we've got you covered.
                    </p>
                </section>

                <section class="about-section">
                    <h2>Features</h2>
                    <ul>
                        <li>✓ Create and manage your tasks easily</li>
                        <li>✓ Mark tasks as complete or incomplete</li>
                        <li>✓ Delete tasks you no longer need</li>
                        <li>✓ Simple and intuitive user interface</li>
                        <li>✓ Fast and responsive design</li>
                    </ul>
                </section>

                <section class="about-section">
                    <h2>Get Started</h2>
                    <p>
                        Head back to the main page and start creating your first task. Stay organized 
                        and boost your productivity with our ToDo List app!
                    </p>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import MyNavbar from '@/UI/myNavbar.vue';

export default {
    components: {
        MyNavbar
    }
}
</script>

<style scoped>
.about-page {
    background-color: #a7c957;
    min-height: 100vh;
}

.about-container {
    padding: 40px 20px;
    max-width: 900px;
    margin: 0 auto;
}

.about-container h1 {
    color: #386641;
    text-align: center;
    margin-bottom: 40px;
    font-size: 4vh;
}

.about-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.about-section {
    background-color: #d9e8d4;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.about-section h2 {
    color: #386641;
    margin-bottom: 15px;
    font-size: 3vh;
}

.about-section p {
    color: #333;
    line-height: 1.6;
    font-size: 2vh;
}

.about-section ul {
    list-style: none;
    padding-left: 20px;
}

.about-section li {
    color: #333;
    line-height: 1.8;
    font-size: 2vh;
    margin-bottom: 10px;
}

.about-section li:before {
    content: "";
    margin-right: 10px;
}
</style>
