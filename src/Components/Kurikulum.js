import React from 'react';
import {
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import triangle from '../Images/triangle.png';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const kurikulum = [
  {
    panel: 'panel1',
    aria: 'panel1bh-content',
    id: 'panel1bh-header',
    judul: 'Pegantar',
    link: [
      {
        title: '1. Pengenalan',
        time: '00:01:00',
      },
    ],
  },
  {
    panel: 'panel2',
    aria: 'panel2bh-content',
    id: 'panel2bh-header',
    judul: 'Mengapa belajar bahasa inggris',
    link: [
      {
        title:
          '2. Cara alami menguasai bahasa inggris semudah bahasa Indonesia',
        time: '00:02:00',
      },
      {
        title: '3. Mengapa ada harus menguasai lebih dari satu bahasa',
        time: '00:03:00',
      },
      {
        title: '4. Mengapa harus Bahasa Inggris',
        time: '00:04:00',
      },
    ],
  },
  {
    panel: 'panel3',
    aria: 'panel3bh-content',
    id: 'panel3bh-header',
    judul: 'Tantangan belajar bahasa inggris',
    link: [
      {
        title:
          '5. Cara alami menguasai bahasa inggris semudah bahasa Indonesia',
        time: '00:05:00',
      },
      {
        title: '6. Mengapa ada harus menguasai lebih dari satu bahasa',
        time: '00:06:00',
      },
    ],
  },
  {
    panel: 'panel4',
    aria: 'panel4bh-content',
    id: 'panel3bh-header',
    judul: 'Cara menguasai bahasa inggris',
    link: [
      {
        title:
          '7. Cara alami menguasai bahasa inggris semudah bahasa Indonesia',
        time: '00:07:00',
      },
      {
        title: '8. Mengapa ada harus menguasai lebih dari satu bahasa',
        time: '00:08:00',
      },
    ],
  },
  {
    panel: 'panel5',
    aria: 'panel5bh-content',
    id: 'panel3bh-header',
    judul: 'Penutup',
    link: [
      {
        title:
          '9. Cara alami menguasai bahasa inggris semudah bahasa Indonesia',
        time: '00:09:00',
      },
      {
        title: '10. Mengapa ada harus menguasai lebih dari satu bahasa',
        time: '00:10:00',
      },
    ],
  },
];

export default function Kurikulum() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <h4 style={{ margin: '2rem 0 1rem' }}>Kurikulum Kelas</h4>
          {kurikulum.map((item, index) => (
            <Accordion
              expanded={expanded === item.panel}
              onChange={handleChange(item.panel)}
              className="kurikulum"
              key={index}
            >
              
              {/* Title */}
              <AccordionSummary
                expandIcon={<img src={triangle} alt='icon' />}
                aria-controls={item.aria}
                id={item.id}
              >
                <p className="m-0" style={{ lineHeight: '1.5', fontWeight: '600' }}>
                  {item.judul}
                </p>
              </AccordionSummary>
              <AccordionDetails>

                {/* Detail */}
                <Grid container>
                  {item.link.map((item, index) => (
                    <Grid container key={index}>
                      <Grid item lg={10} xs={10}>
                        <a href='/'>
                          <p className="m-0" style={{ color: '#0D78BF' }}>
                            {item.title}
                          </p>
                        </a>
                      </Grid>

                      <Grid item xs={2} lg={2}>
                        <Grid container>
                          <Grid item lg={3}>
                            <small>
                              <AccessTimeIcon />
                            </small>
                          </Grid>

                          <Grid item lg={9}>
                            <p>
                              <span style={{ textAlign: 'right' }}>
                                {item.time}
                              </span>
                            </p>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
