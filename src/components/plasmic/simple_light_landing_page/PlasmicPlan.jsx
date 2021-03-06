// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uW8gvugjoKeK9SUGHJ1xTT
// Component: cZk-YWK9d3La
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import BaseCard from "../../BaseCard"; // plasmic-import: TTYQJW7O72dX/component
import Bullet from "../../Bullet"; // plasmic-import: tBYf55tBsR9m/component
import Button from "../../Button"; // plasmic-import: gebML7xSHzTG/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: uW8gvugjoKeK9SUGHJ1xTT/projectcss
import sty from "./PlasmicPlan.module.css"; // plasmic-import: cZk-YWK9d3La/css

export const PlasmicPlan__VariantProps = new Array();

export const PlasmicPlan__ArgProps = new Array(
  "price",
  "name",
  "description",
  "children"
);

function PlasmicPlan__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <BaseCard
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    >
      <div className={classNames(projectcss.all, sty.freeBox__yx50S)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__lwV65)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Basic",
            value: args.name,
            className: classNames(sty.slotTargetName)
          })}

          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zMFjb
                )}
              >
                {"$10"}
              </div>
            ),

            value: args.price
          })}

          {p.renderPlasmicSlot({
            defaultContents: (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___3KniM)}
              >
                <Bullet
                  className={classNames("__wab_instance", sty.bullet__kT0Kq)}
                />

                <Bullet
                  className={classNames("__wab_instance", sty.bullet__olH1F)}
                />

                <Bullet
                  className={classNames("__wab_instance", sty.bullet__tp76O)}
                />
              </p.Stack>
            ),

            value: args.description
          })}

          <div className={classNames(projectcss.all, sty.freeBox__oZxKm)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <Button
                  className={classNames("__wab_instance", sty.button__dzPoa)}
                  color={"outlineBlue"}
                >
                  {"Get started"}
                </Button>
              ),

              value: args.children
            })}
          </div>
        </p.Stack>
      </div>
    </BaseCard>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPlan__ArgProps,
      internalVariantPropNames: PlasmicPlan__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicPlan__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlan";
  } else {
    func.displayName = `PlasmicPlan.${nodeName}`;
  }
  return func;
}

export const PlasmicPlan = Object.assign(
  // Top-level PlasmicPlan renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicPlan
    internalVariantProps: PlasmicPlan__VariantProps,
    internalArgProps: PlasmicPlan__ArgProps
  }
);

export default PlasmicPlan;
/* prettier-ignore-end */
