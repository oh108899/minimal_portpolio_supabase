"use client"
import { useState } from "react";
import { createClient } from "../utils/supabase/client";

export default function Insert() {
  const [input, setInput] = useState({
    title: "",
    content: "",
    url: "",
    review: "",
    reviewer: "",
    rep1_desc: "",
    rep2_desc: ""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput(prev => { return { ...prev, [name]: value } })
  }

  const supabase = createClient();
  const onSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('portfolio')
      .insert({ title: input.title, content: input.content, url: input.url, review: input.review, reviewer: input.reviewer, rep1_desc: input.rep1_desc, rep2_desc: input.rep2_desc });
    console.log(error);
    setInput({
      title: "",
      content: "",
      url: "",
      review: "",
      reviewer: "",
      rep1_desc: "",
      rep2_desc: ""
    })
  }


  return (
    <>
      <h2 >프로젝트 입력</h2>
      <div className="contact_form">
        <form action="" onSubmit={onSubmit}>
          <p className="field">
            <label htmlFor="title">title:</label>
            <input type="text" id="title" name="title" placeholder="title" value={input.title} onChange={handleInputChange} />
          </p>
          <p className="field">
            <label htmlFor="content">Project Description:</label>
            <textarea name="content" id="content" cols="30" rows="10" placeholder="content" value={input.content} onChange={handleInputChange}></textarea>
          </p>
          <p className="field">
            <label htmlFor="url">url:</label>
            <input type="url" id="url" name="url" placeholder="url" value={input.url} onChange={handleInputChange} />
          </p>
          <p className="field">
            <label htmlFor="review">review:</label>
            <textarea name="review" id="review" cols="30" rows="10" placeholder="review" value={input.review} onChange={handleInputChange}></textarea>
          </p>
          <p className="field">
            <label htmlFor="reviewer">reviewer:</label>
            <input type="text" id="reviewer" name="reviewer" placeholder="reviewer" value={input.reviewer} onChange={handleInputChange} />
          </p>
          <p className="field">
            <label htmlFor="rep1_img">rep1_img:</label>
            <input type="file" accept="image/*" id="rep1_img" name="rep1_img" />
          </p>
          <p className="field">
            <label htmlFor="rep1_desc">rep1_desc:</label>
            <textarea name="rep1_desc" id="rep1_desc" cols="30" rows="10" placeholder="rep1_desc" value={input.rep1_desc} onChange={handleInputChange}></textarea>
          </p>
          <p className="field">
            <label htmlFor="rep2_img">rep2_img:</label>
            <input type="file" accept="image/*" id="rep2_img" name="rep2_img" />
          </p>
          <p className="field">
            <label htmlFor="rep2_desc">rep2_desc:</label>
            <textarea name="rep2_desc" id="rep2_desc" cols="30" rows="10" placeholder="rep2_desc" value={input.rep2_desc} onChange={handleInputChange}></textarea>
          </p>
          <p className="field">
            <label htmlFor="thumbnail">thumbnail:</label>
            <input type="file" accept="image/*" id="thumbnail" name="thumbnail" />
          </p>

          <p className="submit">
            <input type="submit" className="primary-btn" value="입력" />
          </p>
        </form>
      </div>
    </>
  )
}