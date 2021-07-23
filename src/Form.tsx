import React, { FC, useState } from "react";
import {
  Row,
  Col,
  Form as Frm,
  Input,
  Select,
  InputNumber,
  Button,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { default as categories } from "./categories.json";

interface Category {
  Name: string;
  code: string;
}

interface Categories {
  [key: string]: Category[];
}

interface APIOptions {
  category?: string;
  difficulty?: string;
  quantity: number;
}

const Form: FC = () => {
  const data: Categories = categories;
  const difficulties: string[] = ["Easy", "Medium", "Hard"];
  const { Option, OptGroup } = Select;
  const [name, setName] = useState<string>("");
  const [canProceed, setCanProceed] = useState<boolean>(false);

  const [options, setOptions] = useState<APIOptions>({
    category: undefined,
    difficulty: undefined,
    quantity: 10,
  });

  const handleChange: any = (eType: string) => (e: any) => {
    setOptions({
      ...options,
      [eType]: e,
    });
  };

  const handlesubmit = async () => {
    const url: string = `https://opentdb.com/api.php?amount=${
      options.quantity
    }${options.category ? "&category=" + options.category : ""}${
      options.difficulty ? "&difficulty=" + options.difficulty : ""
    }`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  };

  return (
    <Frm layout="horizontal" size="large" onSubmitCapture={handlesubmit}>
      <Frm.Item
        label="Name"
        required
        hasFeedback
        validateStatus={canProceed ? "success" : ""}
      >
        <Input
          placeholder="Jonh Doe"
          value={name}
          required
          prefix={<UserOutlined />}
          onChange={(e) => {
            if (e.target.value === null || e.target.value === "") {
              setCanProceed(false);
            } else {
              setCanProceed(true);
            }
            setName(e.target.value);
          }}
        />
      </Frm.Item>

      <Frm.Item label="Category">
        <Select
          placeholder="All Categories"
          onChange={handleChange("category")}
        >
          {Object.keys(data).map((category) => (
            <OptGroup key={category} label={category}>
              {data[category].map((subCategory: Category) => (
                <Option key={subCategory.code} value={subCategory.code}>
                  {subCategory.Name}
                </Option>
              ))}
            </OptGroup>
          ))}
        </Select>
      </Frm.Item>

      <Row>
        <Col>
          <Frm.Item label="Difficulty">
            <Select placeholder="Any" onChange={handleChange("difficulty")}>
              {difficulties.map((difficulty) => (
                <Option key={difficulty} value={difficulty.toLowerCase()}>
                  {difficulty}
                </Option>
              ))}
            </Select>
          </Frm.Item>
        </Col>
        <Col sm={{ push: 1 }}>
          <Frm.Item label="No of questions">
            <InputNumber
              placeholder="10"
              min={1}
              max={100}
              style={{
                width: "55px",
              }}
              onChange={handleChange("quantity")}
            />
          </Frm.Item>
        </Col>
      </Row>

      <Frm.Item>
        <Button type="primary" htmlType="submit" disabled={!canProceed}>
          Submit
        </Button>
      </Frm.Item>
    </Frm>
  );
};

export default Form;
