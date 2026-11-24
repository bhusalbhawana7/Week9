
import { useState, useEffect } from "react";

function EmpList() {

    const [employees, setEmployees] = useState([]);

    const fetchEmployees = async () => {
        try {
            const response = await fetch(
                "https://symmetrical-zebra-6vg9gqrrwp793r9rg-5000.app.github.dev/api/persons"
            );

            const data = await response.json();

            if (response.ok) {
                setEmployees(data);
            } else {
                console.error("Failed to fetch employees", data);
            }

        } catch (error) {
            console.error("Unable to fetch employees:", error);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <div>
            <h2>Employee List</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Salary</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp._id}>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {employees.length === 0 && (
                <p>No employees found.</p>
            )}
        </div>
    );
}

export default EmpList;
