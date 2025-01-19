import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";

export default function About() {
  return (
    <div className="mx-4 my-2">
      <div>
        <h1 className="text-3xl font-semibold">About</h1>
      </div>
      <Box
        component="section"
        className="my-4 w-full h-auto border-2 border-gray-600 p-5 flex flex-col"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="flex items-center">
          <img src="/round_logo.png" alt="logo" className="w-40 h-40" />
          <div className="ml-4">
            <h2 className="text-2xl font-semibold">HYAI 인공지능학회</h2>
            <p className="text-lg font-light">
              한양대학교 ERICA 소프트웨어융합대학 인공지능학과 전공학회
            </p>
            <p className="mt-2 text-lg font-light">
              🧑🏻‍💻HYAI (하이아이)는 “HanYang Artificial Intelligence"의 약자로,{" "}
              <br />
              2022년 9월 26일에 신설된 한양대학교 ERICA의 최초이자 유일한
              인공지능학회입니다.
            </p>
          </div>
        </div>

        <div className="flex items-center mt-4">
          <div className="ml-4">
            <p className="text-lg font-light">
              {" "}
              🍀인공지능에 관심이 있는 사람들이 모여 스터디를 통해 함께
              발전하고, <br /> 대회와 컨퍼런스에 참가하는 등 포트폴리오를 쌓는
              것을 목표로 학회 활동을 진행합니다.{" "}
            </p>

            <h2 className="mt-4 text-2xl font-medium">주요 프로그램</h2>
            <p className="text-lg font-light">- 모각코 (모여서 각자 코딩)</p>
          </div>
        </div>

        <div className="flex w-full h-auto items-center mt-4">
          <Card
            className="mt-4 w-full h-auto mr-2"
            style={{
              backgroundColor: "#F092DD",
              color: "#ffffff",
            }}
          >
            <h2 className="text-2xl font-medium">📅활동 일정</h2>
            <p className="text-lg font-light">- 매주 화요일 18:00</p>
          </Card>

          <Card
            className="mt-4 w-full"
            style={{
              backgroundColor: "#F092DD",
              color: "#ffffff",
            }}
          >
            <h2 className="text-2xl font-medium">📅활동 일정</h2>
            <p className="text-lg font-light">- 매주 화요일 18:00</p>
          </Card>
        </div>
      </Box>
    </div>
  );
}
