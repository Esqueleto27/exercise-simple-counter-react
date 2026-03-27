# React Seconds Counter

## Project Overview

This project is a simple **React application that displays a real-time seconds counter**. The application tracks how many seconds have passed since the website finished loading and updates the interface every second.

The project focuses on practicing **React component creation, props usage, and periodic rendering using JavaScript timers**.

---

## Project Idea

The goal of this project is to build a reusable React component called **SecondsCounter** that visually displays a running timer.

The counter updates every second and represents the number of seconds that have passed since the application started. This type of component is commonly used in dashboards, timers, or tracking interfaces.

---

## Technologies Used

- **React**
- **JavaScript (ES6+)**
- **ReactDOM**
- **HTML5**
- **CSS3**
- **Font Awesome** (for the clock icon)

---

## How It Works

The application renders a component called **SecondsCounter** using React's rendering system.

The counter updates automatically every second using JavaScript's `setInterval()` function. Each update re-renders the component with the updated number of seconds passed.

Example of how the component receives data through props:

```javascript
<SecondsCounter seconds={3434} />
```
