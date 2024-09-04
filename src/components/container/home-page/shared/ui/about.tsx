import { TabsTrigger, Tabs, TabsList, TabsContent } from "../../../../ui";
import { personalData, qualificationData, skillData } from "@/constant";
import {
  QualificationSection,
  SkillItem,
  SkillSection,
  ToolItem,
} from "@/model";
import Image from "next/image";
import { Briefcase, GraduationCap } from "lucide-react";
import { DevImage } from "../../../../shared";

export function About() {
  const getQualificationData = (
    qualificationData: QualificationSection[],
    title: string
  ) => {
    return qualificationData.find((item) => item.title === title);
  };

  const getSkillData = (skillData: SkillSection[], title: string) => {
    return skillData.find((item) => item.title === title);
  };

  return (
    <section className=" xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className=" section-title mb-8 xl:mb-16 text-center mx-auto ">
          About me
        </h2>
        <div className=" flex flex-col xl:flex-row">
          {/* image  */}
          <div className=" hidden xl:flex flex-1 relative">
            <DevImage
              containerStyles=" bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/minimal-profile.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className=" w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none ">
                <TabsTrigger className=" w-[162px] xl:w-auto" value="personal">
                  Personal Infomation
                </TabsTrigger>
                <TabsTrigger
                  className=" w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className=" w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tab content */}
              <div className=" text-lg mt-12 xl:mt-8">
                {/* personalInformation content*/}
                <TabsContent value="personal">
                  <div className=" text-center xl:text-left">
                    <h3 className=" h3 mb-4">Lorem ipsum dolor sit.</h3>
                    <p className=" subtitle max-w-xl mx-auto xl:mx-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere facilis odit consequatur laudantium repudiandae sit
                      a quaerat cum eius, architecto sequi eaque totam. Cum
                      facere quos perferendis recusandae iure mollitia quae
                      deserunt tempora non quibusdam soluta sunt, sapiente
                      obcaecati natus!
                    </p>
                    {/* icon */}
                    <div className=" grid xl:grid-cols-2 gap-4 mb-12">
                      {personalData.map((item, index) => (
                        <div
                          key={index}
                          className=" flex items-center gap-x-4 mx-auto xl:mx-0"
                        >
                          <div className=" text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>
                    {/* languages */}
                    <div className=" flex flex-col gap-y-2">
                      <div className=" text-primary">Language Skill</div>
                      <div className=" border-b border-border"></div>
                      <div> English, Thailand</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualification content */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className=" h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience and education wrapper*/}
                    <div className=" grid  md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className=" flex flex-col  gap-y-6">
                        <div className=" flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className=" capitalize font-medium">
                            {
                              getQualificationData(
                                qualificationData,
                                "experience"
                              )?.title
                            }
                          </h4>
                        </div>
                        {/* list */}
                        <div className=" flex flex-col gap-y-8">
                          {" "}
                          {getQualificationData(
                            qualificationData,
                            "experience"
                          )?.data.map((item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div key={index} className=" flex gap-x-8 group ">
                                <div className=" h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className=" w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className=" font-semibold text-xl leading-none mb-2">
                                    {company}
                                  </div>
                                  <div className=" text-lg leading-none text-muted-foreground mb-4">
                                    {role}
                                  </div>
                                  <div className=" text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {/* educations */}
                      <div className=" flex flex-col  gap-y-6">
                        <div className=" flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className=" capitalize font-medium">
                            {
                              getQualificationData(
                                qualificationData,
                                "education"
                              )?.title
                            }
                          </h4>
                        </div>
                        {/* list */}
                        <div className=" flex flex-col gap-y-8">
                          {" "}
                          {getQualificationData(
                            qualificationData,
                            "education"
                          )?.data.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div key={index} className=" flex gap-x-8 group ">
                                <div className=" h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className=" w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className=" font-semibold text-xl leading-none mb-2">
                                    {university}
                                  </div>
                                  <div className=" text-lg leading-none text-muted-foreground mb-4">
                                    {qualification}
                                  </div>
                                  <div className=" text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className=" text-center xl:text-left">
                    <h3 className=" h3 mb-8">What I Use Everyday</h3>
                    {/* skills */}
                    <div className=" mb-16">
                      <h4 className=" text-xl font-semibold mb-2">Skills</h4>
                      <div className=" border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div className=" ">
                        {getSkillData(skillData, "skills")?.data.map(
                          (item, index) => {
                            const { name } = item as SkillItem;
                            return (
                              <div
                                key={index}
                                className="xl:inline-flex xl:justify-self-start w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              >
                                <div className="flex gap-x-4 items-center font-medium ">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary"></div>
                                  <span>{name}</span>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className=" border-b border-border mb-4"></div>
                      {/* tool list */}
                      <div className=" flex gap-x-8 justify-center  xl:justify-start">
                        {getSkillData(skillData, "tools")?.data.map(
                          (item, index) => {
                            const { imagePath } = item as ToolItem;
                            return (
                              <div key={index}>
                                <Image
                                  src={imagePath}
                                  width={48}
                                  height={48}
                                  alt=" tool image"
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
