import React from 'react'
import Layout from './component/layout'
import { Box, Container, Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';

let list1 = [
    "Personal information is information about you that is personally identifiable like your name, address, email address, or phone number, aadhar details, PAN card, KYC details, etc. and that is not otherwise publicly available. Personal information collected by us includes but is not limited to:",
    "Name, address, phone number, income, age, gender, education level, location, contacts, identity proof, photographs, and e-mail address.",
    "Financial information, including but not limited to, billing address, bank account details, credit/debit card details to process your payment related details, payment method data to process payments for the Services, and documents required to serve as proof for the Know Your Customer (“KYC”) validation.",
    "Your username, password, and other demographic information that you provide in the process of creating an account on our Platform",
    "Demographics information or opinions , and information about subjects that may interest you provided by you if you take a survey or interact with us in.",
    "Your registration or profile information on sent to us by connected services such as LinkedIn, Facebook, or Twitter, as may be authorized by you.",
    "Information from your computer and browser, including your IP address, Jobbershub Affiliate Business cookie information, software attributes, hardware attributes, etc., is automatically collected when you browse/use/register/sign in on Jobbershub Affiliate Business.",
    "Any other detail which we might ask for providing any service to you on the platform Jobbershub Affiliate Business, including but not limited to vehicle details, health information, name, mobile number, KYC details, etc.",
    "Any information that is freely available, accessible in the public domain, furnished under the Right to Information Act, 2005 or any other law for the time being in forced, where such information shall not be regarded as personal data, sensitive personal data, or confidential information. When you use Jobbershub Affiliate Business services, you may choose to make some of your personal information public. If you post personal information online that is accessible to the public, Jobbershub Affiliate Business will not be responsible for the use or misuse of such information.",
    "All such Personal Information and Non-Personal Information described above, which shall be deemed to be disclosed willingly and without any coercion from you. Jobbershub Affiliate Business is not responsible for the accuracy, completeness, veracity nor reliability of any content, products or services which may be accessed. Jobbershub Affiliate Business will not be liable for any loss or damage arising out of the same nor will the Jobbershub Affiliate Business be in any way responsible to verify any information obtained from you."
]

let list2 = [
    "We use the Personal Information and Non-Personal Information provided by you.",
    "To create your account, verifying your identity and process your transaction(s) on our Platform;",
    "For cross-platform data sharing to improve your user experience;",
    "To customise the advertising and content you see on our Platform",
    "For personalized User experience and analytics to improve our Platform.",
    "To fulfil your requests for products and services",
    "To improve our services, contact you, conduct research, and provide anonymous reporting for internal and external clients",
    "To collect statistics about your usage of Platform and its effectiveness",
    "To improve and personalise your experience of the Services and the Content, as well as customize our interactions with you to further expand the scope of our Platform To resolve disputes, customer support and troubleshoot problems that arise from using our Platform",
    "To collect payment from you in relation to the Services",
    "To information you about online and offline offers, products, services and/or updates",
    "To detect, prevent and protect from any errors, frauds, mis-selling, willful misconduct, and other criminal or prohibited activity on our Platform",
    "To enforce and inform you about our Terms of Service",
    "To process and fulfil your request for Services or respond to your queries on our Platform",
    "To allow our business partners and/or affiliated entities to present customised messages to you",
    "To communicate important notices or changes in the Services offered by Jobbershub Affiliate Business, use of our Platform, and the terms/policies which govern the relationship between you and Jobbershub Affiliate Business and with our affiliates",
    "For any other purpose, for which you have granted access to such information to us, based on your interaction with our Platform.",

]

let list3 = [
    "Jobbershub Affiliate Business does not rent, sell, or share personal information about you with other people or non-affiliated companies except to provide products or services you’ve requested, when we have your permission, or under the following circumstances",
    "We provide the information to trusted partners, including third-party service partners, including business partners, affiliates, service providers, authorized payment gateways, payment processors, etc. for the purpose of billing and collection, providing content, products, customer support etc., who work on behalf of or with Jobbershub Affiliate Business under confidentiality agreements. These companies may use your personal information to help Jobbershub Affiliate Business communicate with you about offers from Jobbershub Affiliate Business and our marketing partners. However, these companies do not have any independent right to share this information.",
    "We may share personal information with our other corporate entities and affiliates to help us operate our business and the Site or administer activities such as detection of identity theft, fraud, and other potentially illegal acts, to facilitate joint or co-branded services that you request where such services are provided by more than one corporate entity.",
    "We may share your information with these third parties for those limited purposes provided that you have given us your permission.",
    "We may disclose personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process.",
    "We may on occasion provide magazine subscribers’ postal mailing addresses to selected advertisers who wish to reach you by mail.",
    "We may disclose personal information to protect the rights, property, and safety of Jobbershub Affiliate Business, our business and Services partners, content partners and the users, including to enforce the Terms of Service;",
    "We may disclose personal information in case of a corporate sale, merger, acquisition, sale of business, reorganization, dissolution, insolvency, or such similar events",
    "We may disclose personal information for any other purpose for which the user provided it."
]

let list4 = [
    "We may store and retain your Personal Information and Non-Personal Information, to the extent necessary:",
    "To carry out the Services and provide Content for the user our Platform. Generally, this means, we will keep your Personal Information and Non-Personal Information as long as your account is active or as needed to provide our Services;",
    "Retain and use the information collected as necessary to comply with our legal obligations, resolve disputes or for other business purposes;",
    "Retain your Personal Information and Non-Personal Information for 5 years after you cancel/ deactivate/ unsubscribe your account with us, as our business practice",
    "Where we have no continuing legitimate business need to process your Personal Information and Non-Personal Information, we will either delete or anonymize it or, if this is not possible (for example, because your personal data has been stored in backup archives), then we will securely store your personal data and isolate it from any further processing until deletion is possible."
]

let list5 = [
    "In addition to being able to update and correct your personal data, you may also have other data protection rights, including",
    "The right to withdraw your consent at any time, wherein we have collected and processed your personal data with your consent pursuant to this Privacy Policy. However, you agree that withdrawing your consent will not affect the lawfulness of any processing we carried out before your withdrawal, nor will it affect processing of your Personal Information carried out in reliance on other lawful grounds other than consent. You also agree that in case you do not provide consent or later withdraw your consent, we request you to not access our Platform and/or use the Services. In such a scenario, we also reserve the right to not provide you any Services through our Platform and may delete your information or de-identify it so that it is anonymous and not attributable to you.",
    "The right to ask for a copy of your Personal Information in a portable (machine-readable) format.",
    "The right to deny us from using your Personal Information for direct marketing other campaigns/programmes.",
    `The right to make any of the above requests by contacting us at <a href="mailto:support@jobbershub.in">support@gromo.in</a>. We will respond to all requests in accordance with applicable laws.`
]
const PrivacyPolicy = () => {
    return (
        <Layout>
            <Box backgroundColor="#f7f7f7" py={5}>
                <Container maxWidth="lg">
                    <Paper sx={{ padding: 4 }}>
                        <Typography variant="h4" gutterBottom>
                            Privacy Policy
                        </Typography>
                        <Divider sx={{ marginBottom: 2 }} />

                        <Typography variant="h6" gutterBottom fontWeight={600}>
                            INTRODUCTION
                        </Typography>
                        <Typography variant="body1" paragraph>
                            This Privacy Policy applies to access and use of the software, including but not limited to Mobile application, Web Applications, and any other relevant medium. The website/Software/Application by the name "Jobbershub Affiliate Business” is owned by Quadrillion Technologies Pvt Ltd (together referred to interchangeably as “we,” “our” or “Jobbershub Affiliate Business”). Jobbershub Affiliate Business enables agents/affiliates to sell various financial and non-financial products and services such as Demat account, credit, loans, saving accounts, etc., through our technology platform and earn money (“Services”).
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We at Jobbershub Affiliate Business are committed to protecting the privacy and security of its users (“you”, “your”, “user(s)”, or “subscriber(s)”). Your privacy is important and maintaining your trust is paramount to us. This Privacy Policy (“Privacy Policy”) explains how we collect, use, process, disclose, and safeguard your information when you access and use our Services through our website and mobile app, respectively (collectively referred to as the “Platform”) located at: https://www.jobbershub.in which shall be incorporated into and subject to the Terms of Service of the Platform and shall be read harmoniously and in conjunction.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our Platform and Services are primarily available for use within India only.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Please read this Privacy Policy carefully to understand our policies and practices regarding your information and how we will treat it. Your continued use of our Platform is an affirmation that you have read the privacy policy, understand it, assent and consent to its terms and conditions, including subsequent changes and amendments. If you do not agree to the terms, you are requested not to use or access our website or mobile application.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We strictly adhere to the requirements of the data protection law established in India, and this Privacy Policy is published in accordance with:
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Section 43A of the Information Technology Act, 2000 (“IT Act”); Rule 4 of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (the “SDPI Rules”); and Rule 3 of the Information Technology (Intermediary Guidelines) Rules, 2011 (as amended)
                        </Typography>
                        <Typography variant="body1" paragraph>
                            This Privacy Policy describes our privacy practices for all websites, products, and services that are linked to it. However, this Privacy Policy does not apply to those affiliates and partners that have their own privacy policy. In such situations, we recommend that you read the privacy policy on the applicable website. Any capitalized terms not defined hereunder shall hold the same definition as provided under the Terms of Service.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The Platform is only for use by individuals above the age of eighteen (18) only. If you have any questions regarding this Privacy Policy, please send us an email at <a href="mailto:support@jobbershub.in">support@jobbershub.in</a>.
                        </Typography>

                        <Typography variant="h6" fontWeight={"600"} gutterBottom>
                            WHAT INFORMATION DO WE COLLECT?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We collect Personal Information (as defined below) from you when you register or set up account with us on our Platform. When you start using the Services, we ask you to provide certain information as part of the registration process, and in the course of your interface with the Platform. “Jobbershub Affiliate Business” collects Personal Information when you visit/use/register with Jobbershub Affiliate Business, when you use displayed products or services, when you visit Jobbershub Affiliate Business pages or the pages of certain Jobbershub Affiliate Business partners, affiliates, group companies and when you enter promotions or sweepstakes.
                        </Typography>
                        <List>
                            {list1?.map(v => (<>
                                <ListItem>
                                    <ListItemIcon style={{ minWidth: "30px" }}>
                                        <CircleIcon style={{ fontSize: "10px", color: "black" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={v} />
                                </ListItem>
                            </>))}

                        </List>
                        <Typography variant="body1" paragraph>
                            You hereby grant and/or warrant upon your uploading or making available of such Personal Information, material, information, or content that the owner of such material, information or content has granted Jobbershub Affiliate Business a perpetual, royalty free, non-exclusive right and license to use, reproduce, modify, publish, distribute, display, perform and transmit the information or content through Jobbershub Affiliate Business.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            You further warrant that all such materials do not infringe upon any copyright, violate any property rights, or contain scandalous, libelous, or unlawful matter. This only refers and applies to user-generated content as described. All user’s Personal Information, provided as part of our registration or purchase process, is covered by our Privacy Policy.
                        </Typography>


                        <Typography variant="h6" fontWeight={"600"} gutterBottom>
                            HOW DO WE USE YOUR INFORMATION?
                        </Typography>
                        <List>
                            {list2?.map(v => (<>
                                <ListItem>
                                    <ListItemIcon style={{ minWidth: "30px" }}>
                                        <CircleIcon style={{ fontSize: "10px", color: "black" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={v} />
                                </ListItem>
                            </>))}

                        </List>
                        <Typography variant="body1" paragraph>
                            You specifically agree and consent to us collecting, storing, processing, transferring, and sharing your Personal Information and Non-Personal Information for the aforementioned use-case.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We may send you text messages on your registered mobile number that you share with us. All text messages originating from us, where applicable, through our authorized third-party service providers will at all times be compliant with guidelines prescribed by the Telecom Regulatory Authority of India (“TRAI”).
                        </Typography>


                        <Typography variant="h6" fontWeight={"600"} gutterBottom>
                            TO WHOM DO WE DISCLOSE YOUR INFORMATION?

                        </Typography>
                        <List>
                            {list3?.map(v => (<>
                                <ListItem>
                                    <ListItemIcon style={{ minWidth: "30px" }}>
                                        <CircleIcon style={{ fontSize: "10px", color: "black" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={v} />
                                </ListItem>
                            </>))}

                        </List>
                        <Typography variant="body1" paragraph>
                            We will only disclose Personal Information pursuant to as described in this Privacy Policy or with the written consent of the user.
                        </Typography>


                        <Typography variant="h6" fontWeight={"600"} gutterBottom>
                            THIRD-PARTY WEBLINKS, APPS AND PLUGINS

                        </Typography>

                        <Typography variant="body1" paragraph>
                            Please note that our Platform may link you to third-party websites/apps/plugins (“Third-Party Sites”), that may collect your personal information. Jobbershub Affiliate Business is not in any manner responsible for the security of such Third-Party Sites or their privacy practices or content. Such third-party provides Third-Party Sites may have their own privacy policies governing their storage and retention of your information that you may be subject to. This Privacy Policy does not govern any information provided to, stored on, or used by such Third-Party Sites or third-party providers and we recommend that you review the applicable privacy policy when you enter a Third-Party Site.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            You agree and acknowledge that Jobbershub Affiliate Business is not liable for the information published by any Third-Party Site.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We take care to allow your Personal Information and Non-Personal Information to be accessed only by those who really need it in order to perform their tasks and duties and to third parties who have a legitimate purpose for accessing it and with your consent. Your Personal Information and Non-Personal Information will be transferred only to a Third-Party Sites that ensures the same level of data protection that is mandated under the IT Act and the SDPI Rules.
                        </Typography>



                        <Typography variant="h6" fontWeight={"600"} gutterBottom>
                            OUR COOKIE POLICY

                        </Typography>

                        <Typography variant="body1" paragraph>
                            A “cookie” is a small piece of information stored by a web server on a web browser so it can be later read back from that browser. Cookies are useful for enabling the browser to remember information specific to a given user. We place both permanent and temporary cookies in your computer’s hard drive/Mobile. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. Jobbershub Affiliate Business lets other companies that show advertisements on some of our pages set and access their cookies on your computer. Other companies’ use of their cookies is subject to their own privacy policies, not this one. Advertisers or other companies do not have access to Jobbershub Affiliate Business cookies.
                        </Typography>



                        <Typography variant="h6" fontWeight={"600"} gutterBottom>
                            HOW DO WE RETAIN YOUR INFORMATION?

                        </Typography>
                        <List>
                            {list4?.map(v => (<>
                                <ListItem>
                                    <ListItemIcon style={{ minWidth: "30px" }}>
                                        <CircleIcon style={{ fontSize: "10px", color: "black" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={v} />
                                </ListItem>
                            </>))}

                        </List>

                        <Typography variant="h6" fontWeight={"600"} gutterBottom>
                            HOW DO WE SECURE YOUR DATA?


                        </Typography>
                        <Typography variant="body1" paragraph>
                            We are dedicated to guarding the security of your information and our Platform has several industry-standard security technologies and procedures devised to help protect your data from unauthorized access, use, destruction or disclosure, including technical and organizational security measures to protect the security of your personal data both online and offline including the implementation of access controls, implementation of firewalls, security and penetration tests, secure servers, network intrusion detection and use of anti-virus and anti-malware software.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Confidentiality: Jobbershub Affiliate Business limits access to personal information about you to employees who we believe reasonably need to come into contact with that information to provide products or services to you or in order to do their jobs. Jobbershub Affiliate Business has physical, electronic, and procedural safeguards that comply with applicable laws/ regulations to protect personal information about you.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Protection of your information: Jobbershub Affiliate Business adopts appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your Personal Information and data stored on our Site.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            However, you should be aware that no server and/or location is 100% secure and it is possible that such may be entered without permission by a computer hacker or by someone similarly engaged in unauthorized access. Jobbershub Affiliate Business is not liable if such an act occurs. It is further clarified that you have and so long as you access and/or use our Platform (directly or indirectly) the obligation to ensure that you shall at all times, take adequate physical, managerial, and technical standards, at your end and on your behalf, to preserve the integrity and security of your information, including but not limited to, the Personal Information and Non-Personal Information provided by you.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            You also expressly consent and agree to the sharing of your Personal Information and payment related information, to the extent necessary, with third-party service providers, including payment gateways and payment processors, to process and manage your payment related information. Such payment information while transmitted through our Platform, shall be secured with industry-standard encryption technology offered by the third-party service providers.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Jobbershub Affiliate Business cannot guarantee that transmissions of your payment related information or Personal Information will always be secure or that unauthorized third parties will not be able to overcome the security measures taken by Jobbershub Affiliate Business or the third-party service providers. Jobbershub Affiliate Business thus assumes no responsibility or liability for disclosure of your information due to errors in transmission, unauthorized third-party access, or other causes beyond its control.
                        </Typography>



                        <Typography variant="h6" fontWeight={"600"} gutterBottom>
                            HOW DO YOU UPDATE YOUR PERSONAL DATA?


                        </Typography>
                        <Typography variant="body1" paragraph>
                            You specifically consent and agree that the Personal Information pertaining to your account on our Platform shall be both accurate and current. If you wish to update your Personal Information which is inaccurate or incorrect, you can update the same by emailing us at <a href="mailto:support@jobbershub.in">support@jobbershub.in</a> or by using the self-help tools available in our Platform that allow you to directly review or update your Personal Information. As per the existing legal regulations, specific data fields (such as name, Aadhar number, KYC details address etc.) in your Personal Information would be locked in our systems once you enter that information in our Platform. For certain types of Personal information including but not limited to financial information like bank details, GROMO may seek additional documents for verification purposes.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            If any part of your Personal Information changes during the course of your engagement with us and your use of our Platform, please use email us at <a href="mailto:support@jobbershub.in">support@jobbershub.in</a>.
                        </Typography>

                        <List>
                            {list5?.map(v => (<>
                                <ListItem>
                                    <ListItemIcon style={{ minWidth: "30px" }}>
                                        <CircleIcon style={{ fontSize: "10px", color: "black" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={v} />
                                </ListItem>
                            </>))}

                        </List>

                        <Typography variant="body1" paragraph>
                            Further, You can request Jobbershub Affiliate Business to delete your data by dropping a mail to <a href="mailto:support@jobbershub.in">support@jobbershub.in</a>. Jobbershub Affiliate Business has the right to deny this request in case of any fraud, unwanted activities, or any business or compliance requirements, which requires data retention for a certain period of time. Jobbershub Affiliate Business may combine information about you that we have with information we obtain from business partners or other companies.
                        </Typography>


                        <Typography variant="h6" fontWeight={"600"} gutterBottom>
                            WILL WE CHANGE THE PRIVACY POLICY?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We reserve the right, at our sole discretion, to revise, change or modify this Privacy Policy from time to time and such modifications shall be binding on only upon your acceptance. Therefore, we urge you to review the Privacy Policy periodically to ensure that you agree with our latest information on our privacy practices. We will make best efforts to inform you of any amendments by e-mail or notification in your account on our Platform. However, it is your responsibility to check the Privacy Policy regularly to ensure that you agree with it and your continued use of our Platform will be deemed to be your acceptance of any changes that we make.
                        </Typography>
                        <Typography variant="h6" fontWeight={"600"} gutterBottom>
                            COPYRIGHT POLICY
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The contents of this website and our Platform may not be reproduced partially or fully, without due permission from Jobbershub Affiliate Business as per the Copyright Act, 1957. If referred to as a part of another publication, the source must be appropriately acknowledged. The contents of this website cannot be used in any misleading or objectionable context.
                        </Typography>
                        <Typography variant="h6" fontWeight={"600"} gutterBottom>
                            GOVERNING LAW & DISPUTE RESOLUTION
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our Platform and Services are provided and published by Jobbershub Affiliate Business and are governed by all applicable laws within the territory of India. Any Dispute that may arise in respect of your use (directly or indirectly) of our Platform and/or in respect of this Privacy Policy shall be governed under the respective provisions provided in the Terms of Service.
                        </Typography>
                        <Typography variant="h6" fontWeight={"600"} gutterBottom>
                            PRIVACY QUESTIONS AND GRIEVANCE REDRESSAL
                        </Typography>
                        <Typography variant="body1" paragraph>
                            If you have any questions, concerns, or suggestions regarding our Privacy Policy, please reach out to us using the contact information on our “Contact Us” page or at <a href="mailto:support@jobbershub.in">support@gromo.in</a>. If you have any grievance or complaint with respect to our Platform, please reach out to the grievance officer, the name and contact details provided below:
                        </Typography>


                        <Typography variant="body1" paragraph>
                            <strong>Name:</strong> Yash Shewale
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>E-mail:</strong> <a href="mailto:support@jobbershub.in">support@jobbershub.in</a>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Quadrillion Technologies Private Limited.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            If you have questions, concerns, or suggestions regarding our Privacy Policy, we can be reached using the contact information on our Contact Us page or at <a href="mailto:support@jobbershub.in">support@jobbershub.in</a>
                        </Typography>
                    </Paper>
                </Container>
            </Box>
        </Layout>
    )
}

export default PrivacyPolicy
