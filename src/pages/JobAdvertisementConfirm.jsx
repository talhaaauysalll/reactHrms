import React, { useState, useEffect } from "react";
import { Header, Table, Menu, Icon, Button } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import SystemPersonnelService from "../services/systemPersonnelService";
import { toast } from "react-toastify";

export default function JobAdvertisementConfirm() {
  const [jobAdvertisement, setJobAdvertisement] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllJobAdvertisements()
      .then((result) => setJobAdvertisement(result.data.data));
  }, []);
  let systemPersonnelService = new SystemPersonnelService();
  const confirmJobAdvertisement = (id, isConfirm) => {
    systemPersonnelService
      .confirmJobAdvertisement(id, isConfirm)
      .then(toast.success("İş İlanı Onaylandı..."));
      
  };

  return (
    <div>
      <Header as="h3" style={{ textAlign: "center" }}>
        <br></br>
        Onay Bekleyen İş İlanları
      </Header>
      <Table celled>
        <Table.Header style={{ textAlign: "center" }}>
          <Table.Row>
          
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Firma Adı</Table.HeaderCell>
            <Table.HeaderCell>Lokasyon</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Tipi</Table.HeaderCell>
            <Table.HeaderCell>Min Maaş</Table.HeaderCell>
            <Table.HeaderCell>Max Maaş</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Yayınlanma Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body style={{ textAlign: "center" }}>
          {jobAdvertisement.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              
              <Table.Cell>{jobAdvertisement.jobTitleName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.cityName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.workTimesName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.workTypeName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.numberOfOpenPositions}</Table.Cell>
              <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>
              <Table.Cell>{jobAdvertisement.applicationDate}</Table.Cell>
              <Table.Cell>
                <Button
                  inverted
                  color="green"
                  onClick={() =>
                    confirmJobAdvertisement(jobAdvertisement.id, true)
                  }
                >
                  Onayla
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="11">
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
  );
}
