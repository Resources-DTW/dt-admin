import React from "react";
import {
  Card,
  CardContent,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/material";

export default function Progress({ services }) {
  const firstSix = services.slice(0, 6);
  const rest = services.slice(6);

  return (
    <div>
      <Card style={{ borderRadius: "16px" }}>
        <CardContent>
          <p className="Headline">Popular Interested Services</p>

          <Divider style={{ marginTop: 10 }} />

          <div className="Progress_Container">
            <div className="first_progress">
              {firstSix.map((item, index) => (
                <div key={index}>
                  <div className="Linear_progress">
                    <p>{item.name}</p>
                    <p>{item.value}%</p>
                  </div>
                  <div>
                    <LinearProgress variant="determinate" value={item.value} />
                  </div>
                </div>
              ))}
            </div>

            <div className="first_progress">
              {rest.map((item, index) => (
                <div key={index}>
                  <div className="Linear_progress">
                    <p>{item.name}</p>
                    <p>{item.value}%</p>
                  </div>
                  <div>
                    <LinearProgress variant="determinate" value={item.value} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
