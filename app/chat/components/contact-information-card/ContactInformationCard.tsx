import { useLoaderData, useNavigation, useParams } from "react-router";
import ContactInformation from "./ContactInformation";
import ContactInformationSkeleton from "./ContactInformationSkeleton";
import NoContactSelected from "./NoContactSelected";

const ContactInformationCard = () => {
  const { id } = useParams();
  const { client } = useLoaderData();
  const { state, formMethod } = useNavigation();

  if (state !== "idle" && formMethod !== "POST")
    return <ContactInformationSkeleton />;

  if (client) return <ContactInformation client={client} />;

  if (!id) return <NoContactSelected />;

  if (!client) return <NoContactSelected />;
};

export default ContactInformationCard;
