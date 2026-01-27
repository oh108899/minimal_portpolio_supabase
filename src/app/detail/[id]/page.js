
import { createClient } from "@/app/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Detail({ params }) {
  const supabase = createClient();
  const { id } = await params
  const { data, error } = await supabase.from("portfolio").select().eq('id',id).single();

  const getPublicUrl = (path)=>{
    if (!path) return null
    const { data } = supabase
    .storage
    .from('portfolio')
    .getPublicUrl(path);

    return data.publicUrl;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 decription">
          <div className="contents shadow">
            <Image src={getPublicUrl(data.rep1_img)} alt={data.rep1_desc} width={762} height={504} />
            <p>{data.rep1_desc}</p>
          </div>
          <div className="contents shadow">
            <Image src={getPublicUrl(data.rep2_img)} alt={data.rep2_desc} width={762} height={504} />
            <p>{data.rep2_desc}</p>
          </div>
        </div>
        <div className="col-md-4 portfolio_info">
          <div className="contents shadow">
            <h2>{data.title}</h2>
            <div>{data.content} </div>
            <p className="link">
              <a href={`${data.url}`}>Visit site &rarr;</a>
            </p>
            <hr className="double" />
            <blockquote>
              <p>{data.review}</p>
              <small>- {data.reviewer} -</small>
            </blockquote>
            <p className="nav">
              <Link href="" className="secondary-btn">&larr; Previous Project</Link>
              <Link href="" className="secondary-btn">Next Project &rarr;</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 
