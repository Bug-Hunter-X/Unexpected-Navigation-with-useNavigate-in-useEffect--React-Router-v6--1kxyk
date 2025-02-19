# Unexpected Navigation with useNavigate in useEffect (React Router v6)

This repository demonstrates a common issue encountered when using `useNavigate` from React Router v6 within a `useEffect` hook that lacks dependencies.  The problem stems from the hook's execution on every render, potentially causing unintended navigation behavior.

## Bug Report

The primary bug is that the navigation function inside `useEffect` without dependencies runs repeatedly, resulting in unexpected navigation behavior.

## Solution

The solution is to add the dependency array to the `useEffect` function. This ensures the navigation only happens on the initial render, avoiding multiple navigation attempts.