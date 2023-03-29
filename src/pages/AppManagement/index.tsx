import {
  PageWrapper,
  PageTitle,
  Label,
  BasicInfoContent,
  BasicInfoAppLogo,
  CustomDataContent,
  CustomDataUploadIcon,
  CustomDataDeleteIcon,
  CustomDataAddIcon,
  CustomDataFooter,
  FileSystemContent,
  FileSystemSelectorWrapper,
  FileSystemFooter,
} from "./styled";
import Section from "./components/Section";
import Data from "./components/Data";
import FileSystemCreatingData from "./components/FileSystemCreatingData";
import Input from "@/components/form/Input";
import Textarea from "@/components/form/Textarea";
import Select from "@/components/form/Select";
import uploadIcon from "@/assets/icon-upload.svg";
import deleteIcon from "@/assets/icon-delete.svg";
import addIcon from "@/assets/icon-add.svg";
import { Flex, FlexCentered } from "@/styled";
import { css } from "styled-components";
import { useState } from "react";
import { mockData } from "./mockData";
import Button from "@/components/form/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export enum PageType {
  CREATE,
  UPDATE,
}
interface AppManagementProps {
  pageType: PageType;
}

const BasicInfo: React.FC = (): React.ReactElement => {
  const [logo, setLogo] = useState<string>();

  return (
    <Section
      float="left"
      title="Add your app base info."
      content={
        <BasicInfoContent>
          <FlexCentered>
            <div>
              <FlexCentered>
                <Input label="AppID" placeholder="My App ID" cssStyles={css`
                  max-width: 217px;
                `}></Input>
                <Input label="AppName" placeholder="My Project" cssStyles={css`
                  padding-left: 18px;
                  max-width: 217px;
                `}></Input>
              </FlexCentered>
              <Input
                className="pt-20"
                label="App logo url"
                placeholder="https://xxxxxxxxxxxxxxx.com/logo1.png"
                onChange={(url) => setLogo(url)}
              />
            </div>
            <BasicInfoAppLogo>
              <div className="label">App logo</div>
              <img className="logo" src={logo} />
            </BasicInfoAppLogo>
          </FlexCentered>
          <Input className="pt-20" label="Website Url" placeholder="https://xxxxxxxxxxxxxxxxxxxxxx.com"></Input>
          <Textarea
            className="pt-20"
            width="100%"
            height="104px"
            label="Description"
            placeholder="introduce your app here..."
            maxLength={20}
          />
        </BasicInfoContent>
      }
    />
  )
}

interface CustomDataProps {
  pageType: PageType;
}
const CustomData: React.FC<CustomDataProps> = ({
  pageType
}): React.ReactElement => {
  // mock custom data
  const defaultNewData = pageType === PageType.UPDATE ? [
  {
    label: "New Model",
    value: ""
  }] : [{
    label: "Model 1",
    value: '{"type":"excalidraw/clipboard","elemQ-32HZGfectOecjSjPS{"type":"excalidraw/[clipboard","elements":[{"id":"gmQ-32HZGfectOecjSjPS {"type":"excalidraw/',
  }, {
    label: "Model 2",
    value: '{"type":"excalidraw/clipboard","elemQ-32HZGfectOecjSjPS{"type":"excalidraw/[clipboard","elements":[{"id":"gmQ-32HZGfectOecjSjPS {"type":"excalidraw/',  
  }, {
    label: "Model 3",
    value: "",
  }];

  const [newData, setNewData] = useState<Array<any>>(defaultNewData);
  const navigate = useNavigate();

  return (
    <div className="pt-25">
      <Section
        float="left"
        title="Add your customize data models under this app."
        content={
          <CustomDataContent>
            {pageType === PageType.UPDATE && mockData?.customData?.length > 0 && (
              <>
                {mockData.customData.map((data, idx) => (
                  <FlexCentered className="pt-20" key={`${idx}`}>
                    <Data
                      label={data.label}
                      value={data.value}
                      fullValue={data.fullValue}
                    />
                  </FlexCentered>
                ))}
              </>
            )}
            {newData.map((data, idx) => (
              <FlexCentered className="pt-20" key={`${idx}`}>
                <motion.div
                  style={{
                    width: "100%",
                    height: "100%"
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Textarea
                    width="100%"
                    height="56px"
                    label={data.label}
                    inlineLabel
                    tiny
                    placeholder="Paste your schema here."
                    value={data.value}
                  />
                </motion.div>
                <CustomDataUploadIcon src={uploadIcon} />
                <CustomDataDeleteIcon
                  src={deleteIcon}
                  onClick={() => {
                    setNewData(newData.slice(0, idx).concat(newData.slice(idx + 1)));
                  }}
                />
              </FlexCentered>
            ))}
            <Flex
              className="items-center"
              style={{
                paddingTop: "22px",
                cursor: "pointer",
                width: "fit-content",
              }}
              onClick={() => {
                setNewData([...newData, {
                  label: "New Model",
                  value: ""
                }]);
              }}
            >
              <CustomDataAddIcon src={addIcon} />
              <div style={{
                paddingLeft: "13px",
                color: "#007AFF",
                lineHeight: "24px",
              }}>Add new model</div>
            </Flex>
          </CustomDataContent>
        }
        footer={
          <CustomDataFooter>
            <Button onClick={() => navigate("/app/creation-process")}>Next</Button>
          </CustomDataFooter>
        }
      />
    </div>
  )
}

interface FileSystemProps {
  pageType: PageType;
}
const FileSystem: React.FC<FileSystemProps> = ({
  pageType,
}): React.ReactElement => {
  // mock
  const mockCreatingData = [{
    label: "IndexFolder",
    value: '{"type":"excalidraw/clipboard","elements":[{"id":"gmQ-32HZGfectOecjSjPS{"type":"ex',
    fullValue: '{"type":"excalidrawclipboard","elements"[{"id":"gmQ-32HZGfectOecjSdsfsfsfsfsfsfsfsfjPS{"t{"type":"excalidrawclipboard","elements"[{"id":"gmQ-32HZGfectOecjSjPS{"t',
  }, {
    label: "IndexFile",
    value: '{"type":"excalidraw/clipboard","elements":[{"id":"gmQ-32HZGfectOecjSjPS{"type":"ex',
    fullValue: '{"type":"excalidrawclipboard","elements"[{"id":"gmQ-32HZGfectOecjSdsfsfsfsfsfsfsfsfjPS{"t{"type":"excalidrawclipboard","elements"[{"id":"gmQ-32HZGfectOecjSjPS{"t',
  }, {
    label: "ContentFolder",
    value: '{"type":"excalidraw/clipboard","elements":[{"id":"gmQ-32HZGfectOecjSjPS{"type":"ex',
    fullValue: '{"type":"excalidrawclipboard","elements"[{"id":"gmQ-32HZGfectOecjSdsfsfsfsfsfsfsfsfjPS{"t{"type":"excalidrawclipboard","elements"[{"id":"gmQ-32HZGfectOecjSjPS{"t',
  }];

  const [type, setType] = useState<string>("Custom")

  return (
    <div className="pl-25">
      <Section
        float="right"
        title="Config your app's file system."
        content={
          <FileSystemContent>
            <FileSystemSelectorWrapper>
              <Select
                options={[{
                  name: "Custom",
                  value: "Custom",
                }, {
                  name: "Dataverse",
                  value: "Dataverse",
                }]}
                onChange={(data) => {
                  setType(data.value)
                }}
                value={type}
              />
            </FileSystemSelectorWrapper>
            {type === "Custom" ? (
              <Input label="Choose Ceramic node" placeholder="https://xxx.com/api/ceramic" />
            ) : (
              <Label style={{
                paddingLeft: "16px",
              }}>Choose Ceramic node</Label>
            )}
            <Input className="pt-8" label="Default folder name" placeholder="" value="Untitled" />
          </FileSystemContent>
        }
        footer={
          <FileSystemFooter>
            {pageType === PageType.CREATE ? (
              <>
                {mockCreatingData.map((data, idx) => (
                  <div className="pt-8">
                    <FileSystemCreatingData
                      key={`${idx}`}
                      label={data.label}
                      value={data.value}
                      fullValue={data.fullValue}
                    />
                  </div>
                ))}
              </>
            ) : (
              <>
                {mockData.fileSystemData.map((data, idx) => (
                  <FlexCentered className="pt-20" key={`${idx}`}>
                    <Data
                      label={data.label}
                      value={data.value}
                      fullValue={data.fullValue}
                      tiny
                    />
                  </FlexCentered>
                ))}
              </>
            )}
          </FileSystemFooter>
        }
      />
    </div>
  )
}

const AppManagement: React.FC<AppManagementProps> = ({
  pageType = PageType.CREATE,
}): React.ReactElement => {
  return (
    <PageWrapper>
      <PageTitle>{pageType === PageType.CREATE ? "Create new App" : "Update App"}</PageTitle>
      <Flex>
        <div>
          <BasicInfo />
          <CustomData pageType={pageType} />
        </div>
        <FileSystem pageType={pageType} />
      </Flex>
    </PageWrapper>
  )
}

export default AppManagement;
