import {
  PageWrapper,
  PageTitle,
  InfoArea,
  ConsoleArea,
  Review,
} from "./styled";
import ProgressCard from "@/components/ProgressCard";
import { Flex, FlexCentered } from "@/styled";
import logo from "@/assets/logo.svg";
import logo1 from "@/assets/logo-1.svg";
import logo1Red from "@/assets/logo-1-red.svg";
import { useEffect, useRef, useState } from "react";
import { css } from "styled-components";

enum Status {
  Pending = "pending",
  Success = "success",
  Failed = "failed",
}

/**
 * ====== Mock Data ======
 */
type MockReviewData = {
  key: string;
  label: string;
  value: string;
}[];

const mockReviewData = [{
  key: "logo",
  label: "App logo",
  value: logo,
}, {
  key: "id",
  label: "App ID",
  value: "web3_twitter",
}, {
  key: "name",
  label: "App Name",
  value: "Tbitters",
}, {
  key: "website",
  label: "Website Url",
  value: "https://twitt3r.com/",
}, {
  key: "defaultFolderName",
  label: "Default folder name",
  value: "Untitled",
}, {
  key: "description",
  label: "Description",
  value: "dddddddddddddddddddddddddddddddddcddddddddddddddddddd",
}, {
  key: "ceramicNode",
  label: "Ceramic node",
  value: "https://twittdsffds3rsdgfsgfdzsfvgfsgfgfdzsfvgfsgfdzsfvzvztwittdsffds3r.com",
}];

type MockData = {
  status: Status;
  progress: number;
  info: string,
  steps: Array<{
    content: string,
    status: Status,
  }>;
  message?: string;
  reviewData?: MockReviewData;
}

const mockData: MockData = {
  status: Status.Pending,
  progress: 0,
  info: "Please do not leave this page.",
  steps: [{
    content: "Creating Model indexFolder Creating Model indexFolderCreating Model indexFolder.",
    status: Status.Pending,
  }, {
    content: "Creating Model indexFolder Creating Model indexFolder.",
    status: Status.Pending,
  }, {
    content: "Creating Model indexFolder ...",
    status: Status.Pending,
  }, {
    content: "Creating Model indexFolder ...",
    status: Status.Pending,
  }],
  reviewData: mockReviewData,
}
/**
 * ====== Mock Data ======
 */

const useInterval = (cb: Function, time = 1000) => {
  const cbRef = useRef<Function>();
  useEffect(() => {
    cbRef.current = cb;
  });
  useEffect(() => {
    const callback = () => {
      cbRef.current?.();
    };
    const timer = setInterval(() => {
      callback();
    }, time);
    return () => clearInterval(timer);
  }, []);
};

const AppCreationProcess: React.FC = (): React.ReactElement => {
  const [data, setData] = useState<MockData>(mockData);

  useInterval(() => {
    if (data.progress < 100) {
      const currentProgress = data.progress + 25;
      const status = currentProgress < 100 ? Status.Pending : Math.random() < 0.3 ? Status.Failed : Status.Success;
      const info = status === Status.Pending ? "Please do not leave this page." : Status.Success ? "Start building your app by integrate sdk in your app" : "Please cancel the process or retry the transaction.";
      const message = status === Status.Success ? "！You should keep app secret safe and Never expose it to anyone! It is the only identifier of your app. It could be possible for others to pretend to be your app and tamper user data under your app. if it's leaked.！You should keep app secret safe and Never expose it to anyone! It is the only identifier of your app. It could be possible for others to pretend to be your app and tamper user data under your app. if it's leaked." : "You should keep app secret safe and Never expose it to anyone! It is the only identifier of your app. It could be possible for others to pretend to be your app and tamper user data under your app. if it's leaked.";
      setData({
        ...data,
        progress: currentProgress,
        steps: data.steps.map((step, idx) => {
          return {
            ...step,
            status: (idx + 1) * 25 <= currentProgress ? Status.Success : Status.Pending,
          }
        }),
        status,
        info,
        message,
      });
    }
    console.log(data)
  }, 2000);

  return (
    <PageWrapper>
      <PageTitle>Create new App</PageTitle>
      <Flex className="justify-between">
        <ProgressCard
          progress={data.progress}
          failed={data.status === Status.Failed}
          cssStyles={css`
            width: 760px;
            min-width: 760px;
        `}>
          <InfoArea>
            <img className="logo" src={data.status === Status.Failed ? logo1Red : logo1} />
            <div className={`title status-${data.status}`}>
              {data.status === Status.Pending ? "Your App is creating..." : data.status == Status.Success ? "Your App is created" : "Fail to create app"}
            </div>
            <FlexCentered className="info">{data.info}</FlexCentered>
          </InfoArea>

          <ConsoleArea className={`status-${data.status}`}>
            {data.status === Status.Pending ? data.steps.map((step, idx) => (
              <Flex className="pt-20 items-center" key={`${idx}`}>
                <div className={step.status !== Status.Pending ? "dot active" : "dot"} />
                <div className="message">{step.content}</div>
              </Flex>
            )) : (
              <div className="message">{data.message}</div>
            )}
          </ConsoleArea>
        </ProgressCard>

        <Review>
          <Flex className="header items-center">Review.</Flex>
          {data.reviewData && data.reviewData.map((data) => (
            <div className="row" key={data.key}>
              <div className="label">{data.label}</div>
              {data.key === "logo" ? (
                <div className="logo-wrapper">
                  <img className="logo" src={data.value} />
                </div>
              ) : (
                <div className="value">{data.value}</div>
              )}
            </div>
          ))}
        </Review>
      </Flex>
    </PageWrapper>
  )
}

export default AppCreationProcess;
