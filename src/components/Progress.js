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
          <Typography
            style={{ fontSize: 18, fontWeight: 500, color: "#1B1B1B" }}
          >
            Popular Interested Services
          </Typography>

          <Divider style={{ marginTop: 10 }} />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 5,
                width: "47%",
              }}
            >
              {firstSix.map((item, index) => (
                <div key={index}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <p>{item.name}</p>
                    <p>{item.value}%</p>
                  </div>
                  <div>
                    <LinearProgress variant="determinate" value={item.value} />
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 5,
                width: "47%",
              }}
            >
              {rest.map((item, index) => (
                <div key={index}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
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
