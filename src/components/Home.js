import React from 'react'
import { Table, Container, Button } from 'react-bootstrap'

const Home = () => {
    const pollList = ["who is going to win the contest", "which is the better js framework"]
    return (
        <Container>
            <Table style={{ margin: "5vh" }} stripped bordered hover >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>List of Poll</th>
                        <th>Go to Poll</th>
                    </tr>
                </thead>
                <tbody>
                    {pollList.map((poll, id) => {
                        return (
                            <tr key={id}>
                                <td>{id + 1}</td>
                                <td>{poll}</td>
                                <td>
                                    <Button>Go to poll</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </Table>
        </Container>
    )
}

export default Home
