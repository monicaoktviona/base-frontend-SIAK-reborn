/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';

import * as Layouts from "@/commons/layouts";

const SubCPMKTable = ({ subCPMKDataList

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (subCPMKItem) => {
    isMobile() && navigate(`/subcpmk/${subCPMKItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[subCPMKDataList]}
  	  detail={detail}
  	  itemsAttrs={[
  		{
            id: "cPMK",
            condition: "isHeading",
            label: "CPMK",
            featureName: "parentCPMKKode",
  		}
  	  ]}
        itemsEvents={(subCPMKItem) => [
          <Link to={`/subcpmk/${subCPMKItem.id}`}>
            <Button 
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(subCPMKItem) => [
        ]}
  	/>
  )
};

export default SubCPMKTable;
