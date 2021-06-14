import React, { useState, useEffect } from "react";
import { Header, Table, Menu, Icon,Button } from "semantic-ui-react";
import JobSeekerService from "../services/jobSeekerService";

export default function JobSeekerList() {
    
    const [jobSeeker, setJobSeeker] = useState([]);
  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobAdvertisementService
      .getJobSeekers()
      .then((result) => setJobSeeker(result.data.data));
  }, []);
    
    return (
        <div>
            <Header as="h3" style={{ textAlign: "center" }}>
                <br></br>
        İş Arayanlar
      </Header>
      <Table celled>
        <Table.Header style={{textAlign:"center"}}>
          <Table.Row>
            <Table.HeaderCell>Firma Adı</Table.HeaderCell>
            <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Yayınlanma Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body style={{textAlign:"center"}}>
          {jobAdvertisement.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.employerName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobTitleName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.numberOfOpenPositions}</Table.Cell>
              <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>
              <Table.Cell>{jobAdvertisement.applicationDate}</Table.Cell>
              <Table.Cell><Button inverted color='green'>Detaya Git</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
        </div>
    )
}
